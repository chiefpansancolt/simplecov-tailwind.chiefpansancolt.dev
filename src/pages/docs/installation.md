---
title: Installation
description: installation steps to add Simplecov Tailwindcss.
---

Quasi sapiente voluptates aut minima non doloribus similique quisquam. In quo expedita ipsum nostrum corrupti incidunt. Et aut eligendi ea perferendis.

---

## Setup

Add the below to your Gemfile to make Simplecov Material available as a formatter for your application.

### Ruby Gems Host

```ruby
# ./Gemfile
group :test do
  gem 'simplecov', require: false
  gem 'simplecov-tailwindcss', require: false
end
```

### Github Rubygems Host

```ruby
# ./Gemfile
group :test do
  gem "simplecov", require: false
end
source "https://rubygems.pkg.github.com/chiefpansancolt"
  group :test do
    gem "simplecov-tailwindcss", require: false
  end
end
```

## Usage

To use Simplecov Tailwind you will need to ensure your Formatter is set to use Simplecov Tailwind.

In your helper ensure your line about formatter usage is one of the following.

Ensure to add the require tag at the top of your helper class where Simplecov is configured

```ruby
require 'simplecov-tailwindcss'
```

### Single Formatter Usage

```ruby
SimpleCov.formatter = SimpleCov::Formatter::TailwindFormatter
```

### Multi Formatter Usage

```ruby
SimpleCov.formatters =
  SimpleCov::Formatter::MultiFormatter.new(
    [SimpleCov::Formatter::HTMLFormatter, SimpleCov::Formatter::TailwindFormatter],
  )
```

### Sample

Here is an example usage in a test_helper.rb file for a minitest usage.

```ruby
# test/test_helper.rb

require "simplecov"

SimpleCov.profiles.define "migrator_profile" do
  load_profile "test_frameworks"

  add_filter %r{^/config/}
  add_filter %r{^/db/}
  add_filter %r{^/vendor/}

  add_group "Controllers", "app/controllers"
  add_group "Helpers", "app/helpers"
  add_group "Channels", "app/channels"
  add_group "Models" do |src|
    src.filename.include?("app/models") &&
    !src.filename.include?("app/models/factories") &&
    !src.filename.include?("app/models/salesforce_objects")
  end
  add_group "Factories", "app/models/factories"
  add_group "Salesforce Objects", "app/models/salesforce_objects"
  add_group "Jobs", "app/jobs"
  add_group "Generators", "lib/generators"

  track_files "{app,lib}/**/*.rb"
end

SimpleCov.start "migrator_profile"

SimpleCov.minimum_coverage 90
SimpleCov.formatter = SimpleCov::Formatter::SimplecovFormatter
```
