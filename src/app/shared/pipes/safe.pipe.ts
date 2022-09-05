import { Pipe, PipeTransform } from '@angular/core'
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl } from '@angular/platform-browser'

// To embed youtube link we have to use the embed endpoint
const sanitizeYoutubeUrl = (url: string) => {
    const youtubeId = url.split('v=')[1]
    return `https://www.youtube.com/embed/${youtubeId}`
}
@Pipe({
    name: 'safe',
    standalone: true,
})
export class SafePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}
    public transform(value: string, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value)
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value)
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value)
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value)
            case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(
                    value.includes('youtube') ? sanitizeYoutubeUrl(value) : value
                )
            default:
                throw new Error(`Invalid safe type specified: ${type}`)
        }
    }
}
