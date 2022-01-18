export type TextProps = {
    // text : (token :string, e?:any) => Promise<void>
    text : ( e?:any) => Promise<void>

}

export type AuthProps = {
    login : (e?:any) => Promise<void>
}