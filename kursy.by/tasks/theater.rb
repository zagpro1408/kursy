def age
  puts "Введите свой возвраст"
  age_input = gets.to_i
  if age_input < 12
    cost = 9
  else
    cost = 18
  end

  puts "Цена за билет в театр: " + "#{cost}"
end

age
