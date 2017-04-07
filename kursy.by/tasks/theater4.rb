def age
  puts "Введите свой возвраст, пожалуйста: "
  age_input = gets.to_i
  case
    when age_input <= 12
      cost = 9
    when age_input >= 65
      cost = 12
    else
      cost = 18
  end

  puts "Ваш возвраст: " + age_input.to_s + ", поэтому цена вашего билета: " + cost.to_s
end

age
