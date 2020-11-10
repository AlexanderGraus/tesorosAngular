export interface Cita{
    _id:string;
    user: string;
    autor:string;
    libro?:string;
    cita: string; 
    
}

export interface CitasPaginate{
    docs:Cita[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number;
    nextPage: number;

}