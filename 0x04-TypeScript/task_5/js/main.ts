interface MajorCredits {
    brand: 'MajorCredits';
    credits: number;
}
  
interface MinorCredits {
    brand: 'MinorCredits';
    credits: number;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        brand: 'MajorCredits',
        credits: subject1.credits + subject2.credits,
    };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        brand: 'MinorCredits',
        credits: subject1.credits + subject2.credits,
    };
}
