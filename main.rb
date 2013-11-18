# encoding: UTF-8
require 'sinatra'
require 'find'
set :port, 4700
set :bind, '0.0.0.0'
set :environment, :production


configure do
  set :public_folder, Proc.new { File.join(root, "static") }
  enable :sessions
end

get '/' do
  erb :index
end


def query_to_hash(query)
  require 'rack'
  Rack::Utils.parse_query(query)
end

post '/query_to_hash' do
  @query = params[:query]
  @resultado = query_to_hash(@query)
  @resultado = @resultado.to_s.gsub('",','",<br>')


erb :resultado
end

