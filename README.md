# abb-robotstudio-yumi
RAPID controller code stuff

read the manuals!
http://developercenter.robotstudio.com/index.aspx?devcenter=devcentermanualstore

-----------------------------------------------------------------------------------

# notes
  1. so it seems that we can't just program a single point that is far away from home and expect the simulation to find its own way there (even if it is possible to get there by jogging joints a particular way)
  2. e.g. the program included (which includes several points achieved by a single linear/rotational jog) works, but jumping from home to the last point (100) does not work (or at least did not work in a similar exercise where inbetween points were never trained).
  3. so, maybe assuming that we can get away with simply using Move instructions, our high level abstraction would ideally need to calculate any inbetween targets necessary to get to its desired target??

    http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=126256

# left arm joint jog information

    1. link 1:
        a. home: 0.00
        b. range: -168.50 <=> 168.50
    2. link 2:
        a. home: -130
        b. range: -143.50 <=> 43.50
    3. link 3:
        a. home: 135
        b. range: -168.50 <=> 168.50
    4. link 4:
        a. home: 30.00
        b. range: -123.50 <=> 80.00
    5. link 5:
        a. home: 0.00
        b. range: -290.00 <=> 290.00
    6. link 6:
        a. home: 40.00
        b. range: -88.00 <=> 138.00
    7. link 7:
        a. home: 0.00
        b. range: -229.00 <=> 229.00
