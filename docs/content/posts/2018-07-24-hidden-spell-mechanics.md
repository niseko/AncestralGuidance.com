---
author: Maeveycakes
date: 2018-07-24 21:03:40+00:00
excerpt: Learn about the hidden spell mechanics of Chain Heal, Wellspring, and Earth
  Shield.
template: post
link: http://ancestralguidance.com/hidden-spell-mechanics/
slug: hidden-spell-mechanics
title: Hidden Spell Mechanics
categories:
- General
---

Restoration Shaman has some hidden mechanics that are not very clear in the tooltips of our abilities.  In this article I'm going to explain these mechanics as best as possible.  The three spells highlighted are [Chain Heal](http://www.wowhead.com/spell=1064/chain-heal), [Wellspring](http://www.wowhead.com/spell=197995/wellspring), and [Earth Shield](http://www.wowhead.com/spell=974/earth-shield).  Some of these mechanics are very straight forward while others may still be confusing, such as in the case of [Wellspring](http://www.wowhead.com/spell=197995/wellspring).

# Chain Heal Mechanics

When you cast a [Chain Heal](http://www.wowhead.com/spell=1064/chain-heal), the healing of each bounce is calculated in a specific way.  First the base spell power coefficient calculates the initial healing of the [Chain Heal](http://www.wowhead.com/spell=1064/chain-heal). From here any modifiers that increase the healing of the entire [Chain Heal](http://www.wowhead.com/spell=1064/chain-heal) are multiplied such as versatility and [Unleash Life](http://www.wowhead.com/spell=73685/unleash-life).  Next, the bounce heals are calculated. To do so, the initial heal is multiplied by 0.7^x where x is the bounce count (no falloff if [High Tide](http://www.wowhead.com/spell=157154/high-tide) is talented and the buff is present).  From here, mastery and critical strikes are applied to the initial heal and all bounces individually.  Any other modifiers such as [Earth Shield](http://www.wowhead.com/spell=974/earth-shield) or [Deluge](http://www.wowhead.com/spell=200076/deluge) are then applied to each individual bounce.  This means that even if you have [Earth Shield](http://www.wowhead.com/spell=974/earth-shield) or [Deluge](http://www.wowhead.com/spell=200076/deluge) talented it is always best to cast [Chain Heal](http://www.wowhead.com/spell=1064/chain-heal) on the most injured target since the initial heal of [Chain Heal](http://www.wowhead.com/spell=1064/chain-heal) is the strongest in the chain.  

Since you can only control the initial cast of [Chain Heal](http://www.wowhead.com/spell=1064/chain-heal) it is important to understand how properly target select who to [Chain Heal](http://www.wowhead.com/spell=1064/chain-heal) to best manipulate the jumps of [Chain Heal](http://www.wowhead.com/spell=1064/chain-heal).  [Chain Heal](http://www.wowhead.com/spell=1064/chain-heal) is a “super smart” heal meaning it will always prioritize healing the most injured target within bounce range.  When calculating the "best route" to heal, [Chain Heal](http://www.wowhead.com/spell=1064/chain-heal) heals targets that are missing the most health numerically rather than targets with the lowest percent health.  An example of this is if a target is missing 40k health and is at 1% but another target is missing 50k health and is at 5%, [Chain Heal](http://www.wowhead.com/spell=1064/chain-heal) will heal the target missing 50k health if they are both eligible targets for a jump.  The priority for bounce selection is as follows:

  1. The most injured player in range (numerical health missing)
  2. If no players are injured, any injured eligible friendly (pets, guardians)
  3. A non injured player
  4. A non injured eligible friendly

This priority list is used when [Chain Heal](http://www.wowhead.com/spell=1064/chain-heal) calculates the most optimal path for maximizing healing. This means that if there are two groups of people with one injured target in each group, and one non injured player in between the two groups, the [Chain Heal](http://www.wowhead.com/spell=1064/chain-heal) will bounce from one group to the other through full health targets to attempt to do maximize effective healing and bounces.

# Wellspring Mechanics

[Wellspring](http://www.wowhead.com/spell=197995/wellspring) is an absolute mess of an ability.  It has a few mechanics that keep it in line when combined with [cloudburst totem](http://www.wowhead.com/spell=157153/cloudburst-totem).  Here are the following ways [Wellspring](http://www.wowhead.com/spell=197995/wellspring) divides its healing.

1. [Wellspring](http://www.wowhead.com/spell=197995/wellspring) heals 6 or less targets
    1. Whether the healing is effective or overhealing [wellspring](http://www.wowhead.com/spell=197995/wellspring) will heal for the full amount on all targets
2. [Wellspring](http://www.wowhead.com/spell=197995/wellspring) heals more than 6 targets
    1. If [wellspring](http://www.wowhead.com/spell=197995/wellspring) were to completely overheal, its healing is reduced to 25%.
    2. If [wellspring](http://www.wowhead.com/spell=197995/wellspring) effectively heals 6 or less targets and any number of overheal targets, the healing done to those 6 or less effective targets will not be reduced.  The healing to the targets that are fully overhealed is reduced to 25%.   Take this scenario as an example. [Wellspring](http://www.wowhead.com/spell=197995/wellspring) heals 7 people with a single cast, 4 of them are effectively healed, and 3 are fully overhealed.  The targets that are effectively healed receive the full  tooltip amount of healing (then multiplied by any secondary stats), while the 3 targets that are over healed receive only 25% of the tooltip value.
    3. If [wellspring](http://www.wowhead.com/spell=197995/wellspring) heals more than 6 targets effectively, the healing is divided evenly among all targets effectively healed.  Any targets that are completely overhealed, the healing is reduced to 25%.

These mechanics cause [Wellspring](http://www.wowhead.com/spell=197995/wellspring) to be a wonky spell when used in combination with [Cloudburst totem](http://www.wowhead.com/spell=157153/cloudburst-totem) as there are scenarios where you are doing less feeding because you are healing less even though you are hitting 6 or more targets.  One last thing to note, if you heal exactly 6 targets for effective healing and any number of targets for pure overhealing, you can theoretically create a near infinite [cloudburst totem](http://www.wowhead.com/spell=157153/cloudburst-totem) (we highly recommend against this as it is near impossible to pull off).

# Earth Shield Mechanics

[Earth Shield](http://www.wowhead.com/spell=974/earth-shield) increases the healing received by the target by 10% on any healing done by the Shaman excluding any sources outside of Restoration Shaman abilities and talents (no totems, no trinkets, no azerite).  Spells will only receive the bonus while [Earth Shield](http://www.wowhead.com/spell=974/earth-shield) holds. There is no snapshotting caused by [Earth Shield](http://www.wowhead.com/spell=974/earth-shield).  Any healing over time events will automatically update when [Earth Shield](http://www.wowhead.com/spell=974/earth-shield) is applied or removed. The healing of [Earth Shield](http://www.wowhead.com/spell=974/earth-shield) does not scale with the 10% multiplier it provides and has a 3.0 second internal cooldown.
