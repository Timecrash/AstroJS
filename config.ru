require 'rubygems'
require 'bundler'

Bundler.require 

require_relative './astrojs'
run Sinatra::Application
