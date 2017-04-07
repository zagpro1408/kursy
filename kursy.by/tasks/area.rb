def width
  puts "Введите ширину прямоугольника в см."
  width = gets.to_i
end

def length
  puts "Введите длину прямоугольника в см."
  length = gets.to_i
end

area = length * width
puts "Площадь прямоугольника равна: " + "#{area}"
