---
author: niseko
comments: false
date: 2017-12-25 18:07:40+00:00
excerpt: A Guide on how to use the Restoration Shaman Spreadsheet
layout: post
link: http://ancestralguidance.com/splashystats/
slug: splashystats
title: Splashystats
wordpress_id: 789
categories:
- Legion
---

SplashyStats is a Spreadsheet aiming to figure out how Stats are performing based on logs, and using those for various tools.
Created by Garg and getting updated by [Lytheia](https://ancestralguidance.com/author/lytheia/) and [niseko](https://ancestralguidance.com/author/niseko/). This article will go into detail on how you set it up to include your own logs.


[Maeveycakes](https://ancestralguidance.com/author/maeveycakes/) has done a Video on this topic, if you prefer to watch instead.


https://youtu.be/QJ9oSWBJ7eo


# Step 1: Access the Spreadsheet and make a Copy




<blockquote>[SplashyStats - the Restoration Shaman Spreadsheet](https://docs.google.com/spreadsheets/d/1JvWec-jQBZ5XLqvJ8TKnYHRdKclPg0xU1VCk7O05xSQ/)</blockquote>


Create a copy by clicking the link in the Info Box in the top right. Alternatively use [this link](https://docs.google.com/spreadsheets/d/1JvWec-jQBZ5XLqvJ8TKnYHRdKclPg0xU1VCk7O05xSQ/copy).


# Step 1.5: Do you need to use your own logs?


Your own copy of the Spreadsheet gives you access to a lot of different tools, with an Estimation of stat weights based on logs - such as Gear Comparison (with tier-sets and various item effects), trinket estimations, relic values and neck enchant information.

All this is based on log information giving you stat weights, and some look at how much you cast stuff (Sea star -> Chain heal and 4t20, 2t21 look at Healing Rain). The data thats already in the Spreadsheet is based off of logs of various mythic kills of the members of Ancestral Guidance, trying to get a healthy balance of different types of Bosses and players.

Inserting your own logs will fine-tune this Data or you are able to only use your own Data if you wish by clearing the User Weights before starting.


# Step 2: Selecting a fight and setting up the Spreadsheet


The Data thats most useful are progress kills as they usually involve you trying your best and not cheesing anything - using fights where you actually have something to heal is good as well, since having a lot of downtime can screw with the results.

The initial Setup is happening in the **Setup** Tab. Here you fill in the Orange filled fields based on what you had in the log.

If you're filling directly from the Warcraftlogs page like in this screenshot, don't select any of the stat _Pre-Fight Options _as they're already included in it.![](http://165.227.179.47/wp-content/uploads/2017/12/stats.jpg)

Any grey fields should not be modified.


# Step 3: Processing your chosen log





 	
  1. Download the CSV from a specific fight (only 1 Kill or Wipe) from WarcraftLogs. To do this, find yourself in the Healing Tab of a specific log, yourself selected. In the bottom right corner, you will see a button labeled CSV (marked in red in the Screenshot to the right). Click this to download.

 	
  2. Open the CSV in your Text Editor or Spreadsheet Program of choice, select everything (CTRL+A) and copy it.

 	
  3. In Splashystats, switch to the **Player Logs **tab, delete everything in the light yellow box, select the top left field in said box and paste the content of the CSV.

 	
  4. For this step you need to fill in the Green filled Fields, have the WarcraftLogs report open and also analyze it with [WoWAnalyzer](https://wowanalyzer.com/) as we need Information from there. This is not possible with Private Logs.

 	
    1. Fill in the Fight Length from the Log

 	
    2. Go to the Casts tab of the WarcraftLogs Report and replace the Cloudburst casts in the Sheet (marked Green) with the value from the Log.

 	
    3. Go to the Buffs tab of said report, look for Bloodlust (Heroism) and fill in the Uptime %.

 	
    4. WowAnalyzer:

 	
      1. Grab the Mastery Benefit (2nd Screenshot on the right)

 	
      2. Grab the Unused Tidal Waves and fill both into the correct Fields.







 	
  5. Ensure that Bloodlust Uptime / Mastery Benefit / Tidal Waves still have the % sign as it will break otherwise, and if you have to add the sign, doublecheck the number.


![](http://ancestralguidance.com/wp-content/uploads/2017/12/CSV-button-1024x779.jpg)
![](http://ancestralguidance.com/wp-content/uploads/2017/12/masterybenefit.jpg)


# Step 4: User Weights


You can delete the pre-inserted Logs in the **User Weights** tab, but it is generally not recommended as a single log will always be heavily influenced by that particular fight style, for example Varimathras will favour Healing Rain a lot and thus will influence the Empowered Droplets trait value massively if its the only log.


If you do want to remove them, delete the orange parts of the 2 tables saying




Total Weights - Paste "Values Only" from Above Here


 to clear it. You can also use that table to summarize multiple of your own logs.


# Step 5: The results


After everything is done, the spreadsheet is tailored to your log(s).



 	
  * The **Results** tab will show you the most important stuff in one central place.

 	
  * Use the **Trinket Data** tab to change itemlevel and compare them using the _Overall HPS _column.

 	
    * The **Trinket Chart** tab visualizes it if you prefer that, and takes the itemlevel you put into the other tab




 	
  * **Gear Comparison Tools** can be handy if you want to compare a set to offpieces, multiple pieces of gear, relics or relic paths to each other.

 	
  * Check the changelog of the Master Spreadsheet sometimes if you want to know if yours is still up-to-date.


