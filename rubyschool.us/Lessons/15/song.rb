class Album

  attr_reader :name, :songs

  def initialize name
    @name = name
    @songs = []
  end

  def add_song song
    @songs << song
  end

end


class Song

  attr_reader :name
  attr_reader :duration

  def initialize name, duration
    @name = name
    @duration = duration
  end

end

# Создаем альбом

album1 = Album.new "In Utero"

# Создаем песни

song1 = Song.new "Smells like teen Spirit", 6
song2 = Song.new "In Bloom", 5
song3 = Song.new "D8", 2

# Добавляем песни в альюом

album1.add_song song1
album1.add_song song2
album1.add_song song3

# Отображать песни с альбомом

puts "Название: #{album1.name}"
puts "Песни: "

album1.songs.each do |song|
  puts "#{song.name} Длительность: #{song.duration}"
end
