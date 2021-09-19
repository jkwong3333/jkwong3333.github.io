canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")
canvas.width = 600
canvas.height = 600
demo = document.getElementById('demo')
mass_of_balls = 1
const arr = []
for(i = 0; i < 44; i++){
    arr.push([])
    for(j = 0; j < 44; j++){
        arr[i].push("")
    }
}
var grid = []

class Ball {
    constructor(position,velocity,radius,colour){
        this.position = position
        this.velocity = velocity
        this.temp_velocity = velocity
        this.radius = radius
        this.colour = colour
        this.grid_position = [0,0]
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.position[0], this.position[1], this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.colour
        ctx.fill();
    }
    update(){
        this.velocity[0] = this.temp_velocity[0]
        this.velocity[1] = this.temp_velocity[1]

        this.position[0] = this.position[0] + this.velocity[0]
        this.position[1] = this.position[1] + this.velocity[1]

        this.grid_position = [2 + Math.floor(this.position[0]/15) , 2 + Math.floor(this.position[1]/15) ]
        grid[this.grid_position[0]][this.grid_position[1]] = this


        if (this.position[0] <= 15){
           this.velocity[0] = Math.abs(this.velocity[0])
           this.temp_velocity[0] = this.velocity[0]
        }
        if (this.position[0] >= 585){
            this.velocity[0] = -Math.abs(this.velocity[0])
            this.temp_velocity[0] = this.velocity[0]
        }
        if (this.position[1] <= 15){
           this.velocity[1] = Math.abs(this.velocity[1])
           this.temp_velocity[1] = this.velocity[1]
        }
        if (this.position[1] >= 585){
            this.velocity[1] = -Math.abs(this.velocity[1])
            this.temp_velocity[1] = this.velocity[1]
        }

    }

    check_surroundings(){
        for(i = -2; i < 3; i++){
            for(j = -2; j < 3; j++){
                if (i == 0 && j == 0){
                    continue
                }
                if (grid[this.grid_position[0] + i][this.grid_position[1] + j] != ""){
                    if (2*this.radius + 0 >= ( (this.position[0]-grid[this.grid_position[0] + i][this.grid_position[1] + j].position[0])**2 + (this.position[1]-grid[this.grid_position[0] + i][this.grid_position[1] + j].position[1])**2 )**0.5 ){
                       //alert("collision")
                        this.temp_velocity = update_velocity(this.position,this.velocity,grid[this.grid_position[0] + i][this.grid_position[1] + j].position,grid[this.grid_position[0] + i][this.grid_position[1] + j].velocity)
                    }
                }
            }
        }
    }

}


ball0 = new Ball([100,100],[-1,0.2],15,"blue")
ball1 = new Ball([100,200],[1,0.2],15,"red")
ball2 = new Ball([100,300],[-1,1],15,"red")
ball3 = new Ball([100,400],[0.2,1],15,"red")
ball4 = new Ball([100,500],[-1,1],15,"red")
ball5 = new Ball([200,100],[1,1],15,"red")
ball6 = new Ball([200,200],[1,0.2],15,"red")
ball7 = new Ball([200,300],[1,-0.2],15,"red")
ball8 = new Ball([200,400],[1,1],15,"red")
ball9 = new Ball([200,500],[0.2,-1],15,"blue")
ball10 = new Ball([300,100],[1,1],15,"red")
ball11 = new Ball([300,200],[-1,0.2],15,"blue")
ball12 = new Ball([300,300],[1,1],15,"red")
ball13 = new Ball([300,400],[0.2,-1],15,"red")
ball14 = new Ball([300,500],[1,1],15,"blue")
ball15 = new Ball([400,100],[-1,1],15,"red")
ball16 = new Ball([400,200],[-1,-1],15,"red")
ball17 = new Ball([400,300],[0.2,1],15,"red")
ball18 = new Ball([400,400],[1,-0.2],15,"red")
ball19 = new Ball([400,500],[-0.2,1],15,"red")
ball20 = new Ball([500,100],[1,-0.2],15,"red")
ball21 = new Ball([500,200],[-1,1],15,"blue")
ball22 = new Ball([500,300],[1,-0.2],15,"red")
ball23 = new Ball([500,400],[-1,1],15,"red")
ball24 = new Ball([500,500],[1,-0.2],15,"red")

//alert( update_velocity([100,100],[1,1],[300,200],[-2,-1]     )  )
setInterval(loop,1)
setInterval(draw_all,10)
function loop(){
    grid = []
    for(i = 0; i < 44; i++){
        grid[i] = arr[i].slice()
    }

    ball0.update()
    ball1.update()
    ball2.update()
    ball3.update()
    ball4.update()
    ball5.update()
    ball6.update()
    ball7.update()
    ball8.update()
    ball9.update()
    ball10.update()
    ball11.update()
    ball12.update()
    ball13.update()
    ball14.update()
    ball15.update()
    ball16.update()
    ball17.update()
    ball18.update()
    ball19.update()
    ball20.update()
    ball21.update()
    ball22.update()
    ball23.update()
    ball24.update()
    ball0.check_surroundings()
    ball1.check_surroundings()
    ball2.check_surroundings()
    ball3.check_surroundings()
    ball4.check_surroundings()
    ball5.check_surroundings()
    ball6.check_surroundings()
    ball7.check_surroundings()
    ball8.check_surroundings()
    ball9.check_surroundings()
    ball10.check_surroundings()
    ball11.check_surroundings()
    ball12.check_surroundings()
    ball13.check_surroundings()
    ball14.check_surroundings()
    ball15.check_surroundings()
    ball16.check_surroundings()
    ball17.check_surroundings()
    ball18.check_surroundings()
    ball19.check_surroundings()
    ball20.check_surroundings()
    ball21.check_surroundings()
    ball22.check_surroundings()
    ball23.check_surroundings()
    ball24.check_surroundings()
    //draw_grid(grid)
    
}
function draw_all(){
    ctx.clearRect(0,0,600,600)
    
    ball0.draw()
    ball1.draw()
    ball2.draw()
    ball3.draw()
    ball4.draw()
    ball5.draw()
    ball6.draw()
    ball7.draw()
    ball8.draw()
    ball9.draw()
    ball10.draw()
    ball11.draw()
    ball12.draw()
    ball13.draw()
    ball14.draw()
    ball15.draw()
    ball16.draw()
    ball17.draw()
    ball18.draw()
    ball19.draw()
    ball20.draw()
    ball21.draw()
    ball22.draw()
    ball23.draw()
    ball24.draw()
}

function draw_grid(grid){
    for (i = 0; i < 44; i++){
        for(j = 0; j < 44; j++){
            if (grid[i][j] != ""){
                ctx.globalAlpha = 0.5
                ctx.fillStyle = "black"
                ctx.fillRect((i-2)*15,(j-2)*15,15,15)
                ctx.globalAlpha = 1
            }
        }
    }
}

function dot_product(vector1, vector2){
    return vector1[0] * vector2[0] + vector1[1] * vector2[1]
}

function subtraction(vector1, vector2){
    return [ vector1[0] - vector2[0]  ,  vector1[1] - vector2[1] ]
}

function distance(vector){
    return ( (vector[0])**2  +  (vector[1])**2   )**0.5
}

function update_velocity(x1, v1, x2, v2){
    scalar = dot_product( subtraction(v1,v2) , subtraction(x1,x2)   ) / distance(subtraction(x1,x2))**2
    vector = subtraction(x1,x2)
    vector[0] = vector[0] * scalar
    vector[1] = vector[1] * scalar

    return subtraction( v1, vector)
}

function play_F() {
    var audio = document.createElement("audio");
            audio.src = "click.mp3";
            audio.addEventListener("ended", function () {
                document.removeChild(this);
            }, false);
            audio.play();   
    }
    