@hash = {}

puts "Привет"

def set_age (name, age)
  @hash[name] = age
end

def show_hash
  @hash.each do |name, age|
    puts "Ваше имя: #{name}. Ваш возраст: #{age}"
  end
end

while true
  print "Введите имя: "
  name_input = gets.strip

  if name_input == ""
    break
  end

  print "Введите возраст: "
  age_input = gets.to_i

  set_age name_input, age_input
end

show_hash
