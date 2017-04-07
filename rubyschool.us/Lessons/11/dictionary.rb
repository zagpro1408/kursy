dictionary = {
  "dog" => "собака",
  "cat" => "кошка",
  "girl" => "девушка"
}

loop do
  print "Введите слово: "
  word = gets.strip

  puts "#{word}: #{dictionary[word]}"
end
