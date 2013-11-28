# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
jQuery ->
  $("a").click ->
    button = undefined
    text = undefined
    button = $(this)
    badge_id = "#repost-badge"+button.attr('id')
    badge = $(badge_id)
    text = button.context.innerHTML
    console.log(text)
    if text is "Repost"
      $(this).context.innerHTML = "Reposted"
      $(this).fadeOut()
      badge.fadeIn(100)
    else