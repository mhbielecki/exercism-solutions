module Bob
open System
open System.Text.RegularExpressions

type Bob(sentence:string) = 

    let isYelling() = 
        String.Compare(sentence.ToUpper(), sentence) = 0 
            && Regex.IsMatch(sentence, @"[A-Za-z]")
    let isQuestion() = sentence.EndsWith("?")
    let isSilent() = String.IsNullOrEmpty(sentence.Trim())

    member this.hey() =
        if isYelling() then "Whoa, chill out!"
        elif isQuestion() then "Sure."
        elif isSilent() then "Fine. Be that way!"
        else "Whatever."
