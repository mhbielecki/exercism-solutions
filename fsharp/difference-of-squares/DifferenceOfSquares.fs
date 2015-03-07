module DifferenceOfSquares

type DifferenceOfSquares(n: int) =

    let square x = x * x

    member this.squareOfSums() =
         square(seq{1..n} |> Seq.sum)

    member this.sumOfSquares() =
        seq {1 .. n}
        |> Seq.map square 
        |> Seq.sum

    member this.difference() = this.squareOfSums() - this.sumOfSquares()