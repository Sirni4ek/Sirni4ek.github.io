/*! 
  FizzBuzz program by Danya&Dima, using Google Bard
  not yet yested
*/

fn fizzbuzz(n: u32) {
  for i in 1..n + 1 {
    let output = match i {
      x if x % 15 == 0 => "FizzBuzz",
      x if x % 3 == 0 => "Fizz",
      x if x % 5 == 0 => "Buzz",
      _ => i,
    };
 
    println!("{}", output);
  }
}
 
fn main() {
  fizzbuzz(100);
}
