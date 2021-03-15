// For details, see https://ogp.me/.

import { left, right, Either } from 'fp-ts/Either'

export const objectTypes = [
  /* --- Music --- */
  'music.song',
  'music.album',
  'music.playlist',
  'music.radio_station',
  /* --- Video --- */
  'video.movie',
  'video.episode',
  'video.tv_show',
  'video.other',
  /* --- No Vertical --- */
  'article',
  'book',
  'profile',
  'website',
] as const

type ItemOf<T> = T[keyof T & number]

export type ObjectType = ItemOf<typeof objectTypes>

const isObjectType = (t: string): t is ObjectType =>
  (objectTypes as readonly string[]).indexOf(t) !== -1

export interface ImageMetadata {
  /** Identical to og:image. */
  url: string
  /** An alternate url to use if the webpage requires HTTPS. */
  secure_url?: string
  /** A MIME type for this image. */
  type?: string | MimeType
  /** The number of pixels wide. */
  width?: number
  /** The number of pixels high. */
  height?: number
  /** A description of what is in the image (not a caption).
   * If the page specifies an og:image it should specify og:image:alt. */
  alt?: string
  // NOTE: タイプマーカー．相互変換できないように入っている
  __marker_image_metadata: never
}

export interface VideoMetadata {
  /** Identical to og:video. */
  url: string
  /** An alternate url to use if the webpage requires HTTPS. */
  secure_url?: string
  /** A MIME type for this image. */
  type?: string | MimeType
  /** The number of pixels wide. */
  width?: number
  /** The number of pixels high. */
  height?: number
  // NOTE: タイプマーカー．相互変換できないように入っている
  __marker_video_metadata: never
}

export interface AudioMetadata {
  /** Identical to og:video. */
  url: string
  /** An alternate url to use if the webpage requires HTTPS. */
  secure_url?: string
  /** A MIME type for this image. */
  type?: string | MimeType
  // NOTE: タイプマーカー．相互変換できないように入っている
  __marker_audio_metadata: never
}

/** A type represents the Open Graph protocol basic metadata. */
export interface OgpBasicMetadata {
  /* --- Basic Metadata --- */
  /** The title of your object as it should appear within the graph, e.g., "The Rock". */
  title: string
  /** The type of your object, e.g., "video.movie".
   * Depending on the type you specify, other properties may also be required. */
  type: ObjectType
  /** An image URL which should represent your object within the graph. */
  image: ImageMetadata | ImageMetadata[]
  /** The canonical URL of your object that will be used as its permanent ID in the graph,
   * e.g., https://www.imdb.com/title/tt0117500/ . */
  url: string
  /* --- Optional Metadata --- */
  /** A URL to an audio file to accompany this object. */
  audio?: AudioMetadata | AudioMetadata[]
  /** A one to two sentence description of your object. */
  description?: string
  /** The word that appears before this object's title in a sentence. An enum of (a, an, the, "", auto).
   * If auto is chosen, the consumer of your data should chose between "a" or "an". Default is "" (blank). */
  determiner?: string
  /** The locale these tags are marked up in. Of the format `language_TERRITORY`. Default is `en_US`. */
  locale?: string
  /** An array of other locales this page is available in. */
  locale_alternate?: string
  /** If your object is part of a larger web site,
   * the name which should be displayed for the overall site. e.g., "IMDb". */
  site_name?: string
  /** A URL to a video file that complements this object. */
  video?: VideoMetadata | VideoMetadata[]
  /** Other props */
  [props: string]: unknown
}

type ParserError =
  | {
      type: 'incomplete'
      description?: string
      metadata: 'og' | 'og:image' | 'og:audio' | 'og:video'
    }
  | {
      type: 'empty property encountered'
      description?: string
    }
  | {
      type: 'invalid content value'
      property: string
      description?: string
    }

type ParserWarning =
  | {
      type: 'unknown property'
      description?: string
      property: string
    }
  | {
      type: 'empty property'
      description?: string
      property: string
    }

const isComplete = (t: Partial<OgpBasicMetadata>): t is OgpBasicMetadata =>
  t.title !== undefined &&
  t.type !== undefined &&
  t.image !== undefined &&
  t.url !== undefined

const isCompleteImageMetadata = (
  t: null | Partial<ImageMetadata>
): t is ImageMetadata => t !== null && t.url !== undefined

const isCompleteVideoMetadata = (
  t: null | Partial<VideoMetadata>
): t is VideoMetadata => t !== null && t.url !== undefined

const isCompleteAudioMetadata = (
  t: null | Partial<AudioMetadata>
): t is AudioMetadata => t !== null && t.url !== undefined

export class OgpVisitor {
  private result: Partial<OgpBasicMetadata> = {}
  private otherProps: Record<string, string> = {}
  private imageMetadata: null | Partial<ImageMetadata> = null
  private audioMetadata: null | Partial<AudioMetadata> = null
  private videoMetadata: null | Partial<VideoMetadata> = null
  private errors: ParserError[] = []
  private warnings: ParserWarning[] = []

  constructor() {}

  private emitError(error: ParserError) {
    this.errors.push(error)
  }

  private emitWarning(warning: ParserWarning) {
    this.warnings.push(warning)
  }

  visitImageProperty(property: string, content: string) {
    if (!property.startsWith('og:image:')) {
      throw new Error('unreachable')
    }

    if (this.imageMetadata === null) {
      this.imageMetadata = {}
    }

    const prop = property.slice('og:image:'.length)
    switch (prop) {
      case 'url':
        if (isCompleteImageMetadata(this.imageMetadata)) {
          this.appendImageMetadata()
        }

        if (this.imageMetadata === null) {
          this.imageMetadata = {}
        }

        this.imageMetadata.url = content
        break
      case 'secure_url':
      case 'type':
      case 'alt':
        this.imageMetadata[prop] = content
        break
      case 'width':
      case 'height':
        this.imageMetadata[prop] = parseInt(content)
        break
      default:
        this.emitWarning({
          type: 'unknown property',
          property,
          description:
            `og:image: property "${property}" is not recognized; ignoring` +
            (property.toLowerCase() !== property
              ? '\nhint: a property should be lowercase'
              : ''),
        })
    }
  }

  visitAudioProperty(property: string, content: string) {
    if (!property.startsWith('og:audio:')) {
      throw new Error('unreachable')
    }

    if (this.audioMetadata === null) {
      this.audioMetadata = {}
    }

    const prop = property.slice('og:audio:'.length)
    switch (prop) {
      case 'url':
        if (isCompleteAudioMetadata(this.audioMetadata)) {
          this.appendAudioMetadata()
        }

        if (this.audioMetadata === null) {
          this.audioMetadata = {}
        }

        this.audioMetadata.url = content
        break
      case 'secure_url':
      case 'type':
      case 'alt':
        this.audioMetadata[prop] = content
        break
      default:
        this.emitWarning({
          type: 'unknown property',
          property,
          description:
            `og:image: property "${property}" is not recognized; ignoring` +
            (property.toLowerCase() !== property
              ? '\nhint: a property should be lowercase'
              : ''),
        })
    }
  }

  visitVideoProperty(property: string, content: string) {
    if (!property.startsWith('og:video:')) {
      throw new Error('unreachable')
    }

    if (this.videoMetadata === null) {
      this.videoMetadata = {}
    }

    const prop = property.slice('og:video:'.length)
    switch (prop) {
      case 'url':
        if (isCompleteVideoMetadata(this.videoMetadata)) {
          this.appendVideoMetadata()
        }

        if (this.audioMetadata === null) {
          this.videoMetadata = {}
        }

        this.videoMetadata.url = content
        break
      case 'secure_url':
      case 'type':
      case 'alt':
        this.videoMetadata[prop] = content
        break
      default:
        this.emitWarning({
          type: 'unknown property',
          property,
          description:
            `og:video: property "${property}" is not recognized; ignoring` +
            (property.toLowerCase() !== property
              ? '\nhint: a property should be lowercase'
              : ''),
        })
    }
  }

  visitProperty(property: string, content: string) {
    const [namespace, ...others] = property.split(':')
    if (namespace === '') {
      this.emitError({
        type: 'empty property encountered',
      })
      return
    }

    if (others.length === 0) {
      this.emitWarning({
        type: 'unknown property',
        property,
        description: `flat namespace property "${property}" encountered; ignoring`,
      })
      return
    }

    if (namespace !== 'og') {
      this.emitWarning({
        type: 'unknown property',
        property,
        description: `namespace "${namespace}" is not supported; ignoring`,
      })
      this.otherProps[property] = content
      return
    }

    if (others.length !== 1) {
      const nested = others[0]
      switch (nested) {
        case 'image':
          this.visitImageProperty(property, content)
          break
        case 'audio':
          break
        case 'video':
          break
        default:
          this.emitWarning({
            type: 'unknown property',
            property,
            description: `sub-namespace ${nested} is not supported`,
          })
          break
      }
      return
    }

    const prop = others[0]

    switch (prop) {
      case 'type':
        if (!isObjectType(content)) {
          this.emitError({
            type: 'invalid content value',
            property,
            description: `the content value of og:type should be one of: "${objectTypes.join(
              '", "'
            )}"`,
          })
          break
        }
        this.result[prop] = content
        break
      case 'title':
      case 'url':
      case 'description':
      case 'determiner':
      case 'locale':
      case 'locale_alternate':
      case 'site_name':
        this.result[prop] = content
        break
      case 'image':
        if (isCompleteImageMetadata(this.imageMetadata)) {
          this.appendImageMetadata()
        }

        if (this.imageMetadata === null) {
          this.imageMetadata = {}
        }

        this.imageMetadata.url = content
        break
      case 'audio':
        if (isCompleteAudioMetadata(this.audioMetadata)) {
          this.appendAudioMetadata()
        }

        if (this.audioMetadata === null) {
          this.audioMetadata = {}
        }

        this.audioMetadata.url = content
        break
      case 'video':
        if (isCompleteVideoMetadata(this.videoMetadata)) {
          this.appendVideoMetadata()
        }

        if (this.videoMetadata === null) {
          this.videoMetadata = {}
        }

        this.videoMetadata.url = content
        break
      default:
        this.emitWarning({
          type: 'unknown property',
          property,
          description:
            `og: property "${property}" is not recognized; ignoring` +
            (property.toLowerCase() !== property
              ? '\nhint: a property should be lowercase'
              : ''),
        })
        break
    }
  }

  appendImageMetadata() {
    if (!this.imageMetadata) {
      return
    }

    if (!isCompleteImageMetadata(this.imageMetadata)) {
      this.emitError({
        type: 'incomplete',
        metadata: 'og:image',
      })
      return
    }

    if (!this.result.image) {
      this.result.image = this.imageMetadata
    } else {
      this.result.image = Array.isArray(this.result.image)
        ? [...this.result.image, this.imageMetadata]
        : [this.result.image, this.imageMetadata]
    }

    this.imageMetadata = null
  }

  appendVideoMetadata() {
    if (!this.videoMetadata) {
      return
    }

    if (!isCompleteVideoMetadata(this.videoMetadata)) {
      this.emitError({
        type: 'incomplete',
        metadata: 'og:video',
      })
      return
    }

    if (!this.result.video) {
      this.result.video = this.videoMetadata
    } else {
      this.result.video = Array.isArray(this.result.video)
        ? [...this.result.video, this.videoMetadata]
        : [this.result.video, this.videoMetadata]
    }

    this.videoMetadata = null
  }

  appendAudioMetadata() {
    if (!this.audioMetadata) {
      return
    }

    if (!isCompleteAudioMetadata(this.audioMetadata)) {
      this.emitError({
        type: 'incomplete',
        metadata: 'og:audio',
      })
      return
    }

    if (!this.result.audio) {
      this.result.audio = this.audioMetadata
    } else {
      this.result.audio = Array.isArray(this.result.audio)
        ? [...this.result.audio, this.audioMetadata]
        : [this.result.audio, this.audioMetadata]
    }

    this.audioMetadata = null
  }

  finalize(): Either<
    [ParserError[], ParserWarning[], Partial<OgpBasicMetadata>],
    [ParserWarning[], OgpBasicMetadata]
  > {
    this.appendImageMetadata()
    this.appendVideoMetadata()
    this.appendAudioMetadata()

    if (isComplete(this.result)) {
      return right([[...this.warnings], { ...this.result, ...this.otherProps }])
    }

    this.emitError({
      type: 'incomplete',
      metadata: 'og',
      description: `incomplete OGP metadata; missing "${
        ['title', 'type', 'image', 'url'].filter(n => !this.result[n]).join('", "')
      }"`,
    })

    return left([
      [...this.errors],
      [...this.warnings],
      { ...this.result, ...this.otherProps },
    ])
  }
}
