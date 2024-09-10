export type TitleType={
    heading : 'h1'|'h2'|'h3'|'h4'|'h5'|'h6',
    title : string,
    transform? :any,
    className?:any,
    fontFamily?:any
}
export type ParagraphType={
    paragraph : 'p'|'p-small' | 'p-trancate' |'p-bold' |'p-small-bold' |'p-small-bold-link'
    text:string,
    align? : 'left'|'center'|'right',
    className?:any,
    color?:string
}