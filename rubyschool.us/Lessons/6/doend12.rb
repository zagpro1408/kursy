puts "Введите число"
number_input = gets.to_i
number_input.times do |x|
  x = x +1
  puts x
  sleep 0.2
end
