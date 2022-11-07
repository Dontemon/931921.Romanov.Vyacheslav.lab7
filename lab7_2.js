
function figure(n,type)
{
    switch(type){
        case 'square':
        	for (i = 0; i < n; ++i) 
            {
                let square = document.createElement('div');
                square.className = 'square';
                square.style.border = '1px solid black';
        
                square.style.top = Math.floor(Math.random() * 600) + 100 + 'px';
                square.style.left = Math.floor(Math.random() * 1500) + 100 + 'px';
                square.style.width = Math.floor(Math.random() * 100)+ 50 + 'px';
                square.style.height = square.style.width;
        
                square.onclick = function()
                {
                    if(square.style.backgroundColor != 'yellow')
                    square.style.backgroundColor = 'yellow';
                    else
                    {
                        square.remove();
                    }
                };
                document.body.appendChild(square);
            }
        break;
        case'triangle':
            for (i = 0; i < n; ++i)
            {
                let square = document.createElement('div');
                let squaresize = Math.floor(Math.random() * 200) + 50;
                square.style.position = 'absolute';
                square.style.width = squaresize +'px';
                square.style.height = square.style.width;
                square.style.top = Math.floor(Math.random() * 600) + 100 + 'px';
                square.style.left = Math.floor(Math.random() * 1500) + 100 + 'px';
                square.style.borderBottom = '1px solid black';
                square.style.overflow = 'hidden';
        
                let triangle = document.createElement('div');
                let trianglesize = squaresize/Math.sqrt(2);
                triangle.className = 'triangle';
                triangle.style.width = trianglesize +'px';
                triangle.style.height = triangle.style.width;
                triangle.style.transform = 'rotate(45deg)';
                triangle.style.top = squaresize - trianglesize / 2 + 'px';
                triangle.style.left = (squaresize - trianglesize) / 2 - 1/2 + 'px';
                triangle.style.border = '1px black solid';
                
                document.body.append(square);
                square.append(triangle);
                triangle.onclick = function()
                {
                    if(triangle.style.backgroundColor != 'yellow')
                    triangle.style.backgroundColor = 'yellow';
                    else
                    {
                        square.remove();
                    }
                };
            }
        break;
        case 'circle':
            for (i = 0; i < n; ++i)
            {
                let circle = document.createElement('div');
                circle.className = 'circle';
                circle.style.border = '1px solid black';
        
                circle.style.top = Math.floor(Math.random() * 600) + 100 + 'px';
                circle.style.left = Math.floor(Math.random() * 1500) + 100 + 'px';
                circle.style.width = Math.floor(Math.random() * 100)+ 50 + 'px';
                circle.style.height = circle.style.width;
        
                circle.onclick = function()
                {
                    if(circle.style.backgroundColor != 'yellow')
                    circle.style.backgroundColor = 'yellow';
                    else
                    {
                        circle.remove();
                    }
                };
                document.body.appendChild(circle);
            }
        break;
    }
}