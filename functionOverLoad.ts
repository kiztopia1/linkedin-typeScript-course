function totalLength(x: string,y: string): number
function totalLength(x: any[], y: any[]): number
function totalLength(x: (string | any[]), y: (string | any[])): number {
    var total: number = x.length + y.length
    return total
}

totalLength('string1', 'string2')


