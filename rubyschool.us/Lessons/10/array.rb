@arr = []

def add_info(first_name, age)
  @arr << [first_name, age]
end

def show_info
  n = 0

  @arr.each do |x|
    n += 1
    name_age = ""

    x.each do |i|
      name_age += " #{i}"
    end

    puts "#{n}. #{name_age}"
  end
end

def delete_info
end

loop do

  print "Имя: "
  n = gets.strip

  if n == ""
    break
  end

  print "Возраст: "
  a = gets.to_i

  add_info(n,a)

  puts

end

show_info
