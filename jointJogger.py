class Link:
    def __init__(self, origin, joint):
        self.origin = origin
        self.joint = joint

class Joint:
    def __init__(self, home, min, max):
        self.home = home
        self.curr = self.home
        self.min = min
        self.max = max

class Position:
    def __init__(self, x, y, z):
        self.x = x
        self.y = y
        self.z = z

class LeftArm:
    def __init__(self):
        self.links = {}
        self.links[1] = Link(Position(27.67, 61.63, 399.97),
                             Joint(0.00, -168.50, 168.50))
        self.links[2] = Link(Position(),
                             Joint(-130.00, 143.50, 43.50))
        self.links[3] = Link(Position(),
                             Joint(135.00, -168.50, 168.50))
        self.links[4] = Link(Joint(30.00, -123.50, 80.00))
        self.links[5] = Link(Joint(0.00, -290.00, 290.00))
        self.links[6] = Link(Joint(40.00, -88.00, 138.00))
        self.links[7] = Link(Joint(0.00, -229.00, 229.00))

        self.tcp = Position(-5.80, 162.82, 131.71)

    def jogLinkSeven(self):
        step = 0.10
        link = self.links[7]
        joint = link.joint
        # if you can't jog anymore this direction!
        if (joint.curr + step > joint.max): return
        if (joint.curr + step < joint.min): return

        joint.curr += step

        #link seven and tool0 have the same frame position!!! (???)
        self.tcp.x += 0
        self.tcp.y += 0
        self.tcp.z += 0

    def jogLinkSix(self):
        step = 0.10
        link = self.links[6]
        joint = link.joint
        # if you can't jog anymore this direction!
        if (joint.curr + step > joint.max): return
        if (joint.curr + step < joint.min): return

        joint.curr += step

        #
        self.tcp.x += 0
        self.tcp.y += 0
        self.tcp.z += 0
