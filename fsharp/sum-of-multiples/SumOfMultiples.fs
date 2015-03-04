module SumOfMultiples

type SumOfMultiples(coefficients: seq<int>) = 

    let normalizedCoefficients = 
        coefficients 
        |> Seq.filter(fun n -> n <> 0) 

    let multipleOfCoefficients num = 
        Seq.exists (fun coefficient -> num % coefficient = 0) normalizedCoefficients

    new() = SumOfMultiples([3; 5])

    member this.To(x: int) = 
        seq {1 .. x-1} 
        |> Seq.filter(multipleOfCoefficients)
        |> Seq.sum