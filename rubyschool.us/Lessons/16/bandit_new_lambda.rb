add_10 = lambda { |x| return x + 10}
add_20 = lambda { |x| return x + 20}
sub_20 = lambda { |x| return x - 20}

money = 1000

hh = {
  111 => add_10,
  222 => add_10,
  333 => add_20,
  444 => add_20,
  555 => add_20,
  666 => sub_20,
  777 => sub_20,
  888 => sub_20,
  999 => sub_20
}



loop do
  x = rand(100..999)

  puts "Enter to start..."
  gets

  puts "Combination: #{x}"

  if hh[x]
    f = hh[x]
    money = f.call money
  else
    money -= 5
  end

  puts "Balance: #{money}"

end
