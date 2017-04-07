class Book

  def initialize
    @hh = {}
  end

  def add_person options
    puts "Перезаписал существующий контакт: #{options[:name]}" if @hh[options[:name]]

    @hh[options[:name]] = options[:age]
  end

  def show_all

    @hh.each do |name, age|
      puts "Имя: #{name} Возраст: #{age}"
    end

  end

end

b = Book.new

while true
  print "Введите Имя: "
  name_input = gets.strip.capitalize

    if name_input == ""
      break
    end

  print "Введите Возраст: "
  age_input = gets.to_i


  b.add_person :name => name_input, :age => age_input
end

  b.show_all
