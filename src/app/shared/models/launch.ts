export interface Launch {
    fairings: {
        reused: string
        recovery_attempt: string
        recovered: string
        ships: []
    }
    links: {
        patch: {
            small: string
            large: string
        }
        reddit: {
            campaign: string
            launch: string
            media: string
            recovery: string
        }
        flickr: {
            small: string[]
            original: string[]
        }
        presskit: string
        webcast: string
        youtube_id: string
        article: string
        wikipedia: string
    }
    static_fire_date_utc: string
    static_fire_date_unix: string
    net: boolean
    window: string
    rocket: string
    success: boolean
    failures: {
        time: number
        altitude: number
        reason: string
    }[]
    details: string
    crew: string[]
    ships: string[]
    capsules: string[]
    payloads: string[]
    launchpad: string
    flight_number: number
    name: string
    date_utc: string
    date_unix: number
    date_local: string
    date_precision: string
    upcoming: boolean
    cores: [
        {
            core: string
            flight: number
            gridfins: boolean
            legs: boolean
            reused: boolean
            landing_attempt: boolean
            landing_success: boolean
            landing_type: string
            landpad: string
        }
    ]
    auto_update: boolean
    tbd: boolean
    launch_library_id: string
    id: string
}
