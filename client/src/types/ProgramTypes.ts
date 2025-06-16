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
    name: string, 
    exerciseList: Array<exerciseType>
  }

export interface exerciseType{
    id: number,
    name: string,
    sets: number,   
    reps: number,
    notes: string
  }