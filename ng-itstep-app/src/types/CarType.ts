export type CarType = {
    id: Number;
    name: string;
    model: string;
    year: number;
    colors: ColorsType[],
    isActive: boolean;
}

export  type ColorsType = {
    color: string;
    img: string;
}
  