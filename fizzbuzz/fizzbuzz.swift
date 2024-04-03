func fizzbuzz(n: Int) {
  for i in 1...n {
    if i % 3 == 0 && i % 5 == 0 {
      print("fizzbuzz")
    } else if i % 3 == 0 {
      print("fizz")
    } else if i % 5 == 0 {
      print("buzz")
    } else {
      print(i)
    }
  }
}

// Entry point
func main() {
  fizzbuzz(n: 100)
}

// Call the entry point
main()

// how to run:
// swiftc -o fizzbuzz-swift fizzbuzz.swift ; ./fizzbuzz-swift
