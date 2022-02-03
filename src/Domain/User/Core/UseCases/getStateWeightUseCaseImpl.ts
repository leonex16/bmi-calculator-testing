export const getStateWeightUseCase = ( bmi: number ): string | null => {
  try {
    const STATUS = {
      UNDER_WEIGHT: {
        BETWEEN: [ 0, 18.5 ],
        LABEL: 'Under weight',
      },
      HEALTHY_WEIGHT: {
        BETWEEN: [ 18.5, 25 ],
        LABEL: 'Healthy weight',
      },
      OVER_WEIGHT: {
        BETWEEN: [ 25, 30 ],
        LABEL: 'Over weight',
      },
      OBESE: {
        BETWEEN: [ 30, 35 ],
        LABEL: 'Obese',
      },
    };

    const statusFound = Object.values( STATUS ).find(( { BETWEEN } ) => {
      const [ MIN, MAX ] = BETWEEN;

      return ( bmi >= MIN && bmi <= MAX );
    } );

    if ( statusFound === undefined ) {
      throw new Error( `Status not found for BMI: ${bmi}` );
    }

    return statusFound.LABEL;
  } catch ( error: unknown ) {
    if ( error instanceof Error ) {
      console.error( `Error in getStateWeightUseCase: ${error.message}` );
    }

    return null;
  }
};
