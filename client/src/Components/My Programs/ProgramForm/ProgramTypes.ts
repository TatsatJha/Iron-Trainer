export const ItemTypes = {
    EXERCISE: 'exercise',
  }

export interface programType {
    id: number,
    name: string,
    sessions: Array<sessionType>
  }

export interface sessionType{
    id: number, 
    exerciseList: Array<exerciseType>
  }

export interface exerciseType{
    id: number,
    name: string,
    sets: number,  
    bottomRep: number, 
    topRep: number,
    notes: string
  }