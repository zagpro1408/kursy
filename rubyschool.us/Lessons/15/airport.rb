class Airport

  attr_reader :name
  attr_reader :planes

  def initialize name
    @name = name
    @planes = []
  end

  def add_planes plane
    @planes << plane
  end
end

class Plane

  attr_reader :model

  def initialize model
    @model = model
  end

end

# Создаем массив аэропортов

airports = []

# Создаем аэропорты

airport1 = Airport.new "Minsk-1"
airport2 = Airport.new "Minsk-2"

# Добавляем аэропорты в один массив

airports << airport1
airports << airport2

# Создаем самолеты для 1 аэропорта

plane1 = Plane.new "111"
plane2 = Plane.new "222"
plane3 = Plane.new "333"

# Добавляем самолеты в 1 аэропорт

airport1.add_planes plane1
airport1.add_planes plane2
airport1.add_planes plane3

# Создаем самолеты для 2 аэропорта

plane_a = Plane.new "aaa"
plane_b = Plane.new "bbb"

# Добавляет самолеты в 2 аэропорт

airport2.add_planes plane_a
airport2.add_planes plane_b

# Отобразить названия аэропортов с их самолетами

airports.each do |x|
  puts "Название: #{x.name}"

  x.planes.each do |plane|
    puts "Самолет: #{plane.model}"
  end

end
