use std::fs;
use std::time::Instant;
use std::time::Duration;

fn main() {

  let now: Instant = Instant::now();

  let file_path: &str = "./2023/Challenge-01/file.txt";

  println!("In file {}", file_path);

  let contents: String = fs::read_to_string(file_path)
    .expect("Should have been able to read the file");

  for content in contents.chars(){
    println!("{}", content);
  }

  let elapsed: Duration = now.elapsed();
  println!("Elapsed: {:.3?}", elapsed);
}