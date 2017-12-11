json.extract! job, :id, :title, :company, :description, :url, :created_at, :updated_at
json.url job_url(job, format: :json)
