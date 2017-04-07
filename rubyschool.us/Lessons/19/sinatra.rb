require "sinatra"

get "/" do
  erb :index
end

get "/contacts" do
  @title = "Contacts"
  @content = "Telephone number: +375 - 29 - 6753589"
  erb :message
end

get "/faq" do
  @title = "FAQ"
  @content = "FAQ information"
  erb :message
end

get "/something" do
  @title = "Something"
  @content = "My name is Vladimir!"
  erb :message
end

post "/" do
  @login = params[:login]
  @password = params[:password]

  if @login == 'admin' && @password == 'secret'
    erb :welcome
  else
    @message = 'Access denied!'
    erb :index
  end
end
