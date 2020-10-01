export interface Question {
    title: string;
    variant1: string;
    variant2: string;
    variant3: string;
    variant4: string;
    iswrite1: boolean;
    iswrite2: boolean;
    iswrite3: boolean;
    iswrite4: boolean;
    time: number;

    shouldShow?: boolean;
    
  }