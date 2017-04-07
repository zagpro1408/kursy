def even
  puts "Введите целое четное число"
  even_input = gets.to_i
  if even_input % 2 == 0
    puts "Четное"
  else
    puts "Не четное"
  end
end

even

