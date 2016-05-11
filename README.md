# abb-robotstudio-yumi
RAPID controller code stuff

read the manuals!
http://developercenter.robotstudio.com/index.aspx?devcenter=devcentermanualstore

-----------------------------------------------------------------------------------

# notes
  1. so it seems that we can't just program a single point that is far away from home and expect the simulation to find its own way there (even if it is possible to get there by jogging joints a particular way)
  2. e.g. the program included (which includes several points achieved by a single linear/rotational jog) works, but jumping from home to the last point (100) does not work (or at least did not work in a similar exercise where inbetween points were never trained).
  3. so, maybe assuming that we can get away with simply using Move instructions, our high level abstraction would ideally need to calculate any inbetween targets necessary to get to its desired target??
  4. however, how possible is this? we can probably generate some sort of system wherein we calculate possible ranges of positions/orientations of the TCP (tool center point) by changing individual joints (???)
