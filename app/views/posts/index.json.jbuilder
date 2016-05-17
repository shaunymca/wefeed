json.array!(@posts) do |post|
  json.extract! post, :user_id, :url, :summary
  json.url post_url(post, format: :json)
end
