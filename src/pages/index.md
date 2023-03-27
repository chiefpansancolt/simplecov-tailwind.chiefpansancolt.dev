---
title: Getting started
pageTitle: Simplecov Tailwindcss - Getting Started.
description: Getting started with using Simplecov Tailwindcss in a Ruby project.
---

Learn how to get Simplecov Tailwindcss set up in your project.

{% quick-links %}

{% quick-link title="Installation" icon="installation" href="/docs/installation" description="Step-by-step guides to setting up your system and installing the library." /%}

{% quick-link title="Usage" icon="presets" href="/" description="Understand how to use it in your project." /%}

{% quick-link title="Simplecov" icon="plugins" href="https://github.com/simplecov-ruby/simplecov" description="See configuration details about simplecov at there repo." /%}

{% quick-link title="Roadmap" icon="theming" href="https://github.com/users/chiefpansancolt/projects/9" description="See what is planned or being worked" /%}

{% /quick-links %}

---

## Quick start

Simplecov Tailwindcss is a replacement formatter to the out of the box one that comes with [Simplecov](https://github.com/simplecov-ruby/simplecov).

### Installing dependencies

Be sure to add simplecov to your gem file to start before installing simplecov-tailwindcss

```ruby
# ./Gemfile

group :test do
  gem 'simplecov', require: false
end
```

> SimpleCov is a code coverage analysis tool for Ruby. It uses Ruby's built-in Coverage library to gather code coverage data, but makes processing its results much easier by providing a clean API to filter, group, merge, format, and display those results, giving you a complete code coverage suite that can be set up with just a couple lines of code. SimpleCov/Coverage track covered ruby code, gathering coverage for common templating solutions like erb, slim and haml is not supported. In most cases, you'll want overall coverage results for your projects, including all types of tests, Cucumber features, etc. SimpleCov automatically takes care of this by caching and merging results when generating reports, so your report actually includes coverage across your test suites and thereby gives you a better picture of blank spots.

---

## Basic usage

To use Simplecov Tailwindcss you will need to ensure your Formatter is set to use Simplecov Tailwindcss.

### Features

Features available with HTML Formatter for simplecov

- Tabular view for Groupings
- File name searches
- Modal view of File Coverage from Click of Row
- Tile views for Stats in a group
- Clean Title of project
- Branches Coverage
- Support of Dark Mode
- Support sort, search, and file open on page refresh
- File Details for slideover view

### Adding to formatters

In your helper ensure your line about formatter usage is one of the following.

Ensure to add the require tag at the top of your helper class where Simplecov is configured

```ruby
require 'simplecov-tailwindcss'
```

**Single Formatter Usage:**

```ruby
SimpleCov.formatter = SimpleCov::Formatter::TailwindFormatter
```

**Multi Formatter Usage:**

```ruby
SimpleCov.formatters =
  SimpleCov::Formatter::MultiFormatter.new(
    [SimpleCov::Formatter::HTMLFormatter, SimpleCov::Formatter::TailwindFormatter],
  )
```

---

## Resources

### License

Simplecov Tailwind is available as open source under the terms of the [MIT License](https://github.com/chiefpansancolt/simplecov-tailwindcss/blob/main/LICENSE).

### Change Log

Latest release details

#### Version [2.1.0](https://github.com/chiefpansancolt/simplecov-tailwindcss/releases/tag/2.1.0)

##### Features

- Touch up Color contrast on file views ([#22](https://github.com/chiefpansancolt/simplecov-tailwindcss/issues/22))
- Add File Details for slideover view of File ([#27](https://github.com/chiefpansancolt/simplecov-tailwindcss/issues/27))

##### Updates

- Updated view of File list to show Percent covered better ([#29](https://github.com/chiefpansancolt/simplecov-tailwindcss/issues/29))

##### Bug Fixes

- Fixed View not changing per row ([#26](https://github.com/chiefpansancolt/simplecov-tailwindcss/issues/26))
- Fix bottom of small file views ([#23](https://github.com/chiefpansancolt/simplecov-tailwindcss/issues/23))

---

## Getting help

There are many ways to get assistance via Issues, Discussions, Pull Requests and Discord Community.

### Contributing

Bug Reports, Feature Requests, and Pull Requests are welcome on GitHub at [https://github.com/chiefpansancolt/simplecov-tailwindcss](https://github.com/chiefpansancolt/simplecov-tailwindcss). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](https://github.com/chiefpansancolt/simplecov-tailwindcss/blob/main/.github/CODE_OF_CONDUCT.md) code of conduct.

To see more about Contributing check out this [document](https://github.com/chiefpansancolt/simplecov-tailwindcss/blob/main/.github/CONTRIBUTING.md).

- Fork Repo and create new branch
- Once all is changed and committed create a pull request.

**Ensure all merge conflicts are fixed and CI is passing.**

### Join the community

Join the community buy posting in our [discussions](https://github.com/chiefpansancolt/simplecov-tailwindcss/discussions) on GitHub or joining the community on [discord](https://discord.gg/SDryP2579d)!
