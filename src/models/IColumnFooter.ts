export interface IColumnFooter {
    id: number,
    title: string,
    categories: [
        {
            text: string,
            path: string
        }
    ]
}