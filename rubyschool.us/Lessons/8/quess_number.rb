x = rand (1..200)
puts "Угадай число от 1 до 200"
puts "У вас 10 попыток"

10.times do | i |
  puts "Попытка № #{i+1} : "
  n = gets.to_i

  if i < 10
    if n < x
      puts "Число больше"
    elsif n > x
      puts "Число меньше"
    else
      puts "***** Угадал! *****"
      exit
    end
  else
    puts "Попытки закончились!"
    puts "Число, которое вы не угадали #{x}"
    exit
  end

end
