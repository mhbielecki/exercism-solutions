module public SumOfMultiples

type SumOfMultiples(coefficients: List<int>) = 

    let multipleOfCoefficients num = 
        Seq.exists (fun coefficient -> num % coefficient = 0) coefficients

    new() = SumOfMultiples([3; 5])

    member this.To(x: int) = 
        seq {1 .. x-1} 
        |> Seq.filter(multipleOfCoefficients)
        |> Seq.sum