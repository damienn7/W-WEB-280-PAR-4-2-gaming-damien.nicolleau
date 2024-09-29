// import * as dat from 'dat.gui';
import { Chess } from 'chess.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// import nebula from '../../src/img/nebula.jpg';
// import stars from '../../src/img/stars.jpg';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// const monkeyUrl = new URL('../assets/monkey.glb', import.meta.url);
const wbishop = new URL('../assets/blender-chess-pieces/w-bishop.glb', import.meta.url);
const wking = new URL('../assets/blender-chess-pieces/w-king.glb', import.meta.url);
const wqueen = new URL('../assets/blender-chess-pieces/w-queen.glb', import.meta.url);
const wrook = new URL('../assets/blender-chess-pieces/w-rook.glb', import.meta.url);
const wknight = new URL('../assets/blender-chess-pieces/w-knight.glb', import.meta.url);
const wpawn = new URL('../assets/blender-chess-pieces/w-pawn.glb', import.meta.url);
const bbishop = new URL('../assets/blender-chess-pieces/b-bishop.glb', import.meta.url);
const bking = new URL('../assets/blender-chess-pieces/b-king.glb', import.meta.url);
const bqueen = new URL('../assets/blender-chess-pieces/b-queen.glb', import.meta.url);
const brook = new URL('../assets/blender-chess-pieces/b-rook.glb', import.meta.url);
const bknight = new URL('../assets/blender-chess-pieces/b-knight.glb', import.meta.url);
const bpawn = new URL('../assets/blender-chess-pieces/b-pawn.glb', import.meta.url);
const chessBoard = new URL('../assets/blender-chess-pieces/board.glb', import.meta.url);


const pieces_obj = {
    "b-bishop": bbishop,
    "b-king": bking,
    "b-queen": bqueen,
    "b-rook": brook,
    "b-knight": bknight,
    "b-pawn": bpawn,
    "w-bishop": wbishop,
    "w-king": wking,
    "w-queen": wqueen,
    "w-rook": wrook,
    "w-knight": wknight,
    "w-pawn": wpawn,
    "board": chessBoard
}

//format key:value = x:z
const dictionnary = {
  "-3.5:-3.5": "a8",
  "-2.5:-3.5": "b8",
  "-1.5:-3.5": "c8",
  "-0.5:-3.5": "d8",
  "0.5:-3.5": "e8",
  "1.5:-3.5": "f8",
  "2.5:-3.5": "g8",
  "3.5:-3.5": "h8",
  "-3.5:-2.5": "a7",
  "-2.5:-2.5": "b7",
  "-1.5:-2.5": "c7",
  "-0.5:-2.5": "d7",
  "0.5:-2.5": "e7",
  "1.5:-2.5": "f7",
  "2.5:-2.5": "g7",
  "3.5:-2.5": "h7",
  "-3.5:-1.5": "a6",
  "-2.5:-1.5": "b6",
  "-1.5:-1.5": "c6",
  "-0.5:-1.5": "d6",
  "0.5:-1.5": "e6",
  "1.5:-1.5": "f6",
  "2.5:-1.5": "g6",
  "3.5:-1.5": "h6",
  "-3.5:-0.5": "a5",
  "-2.5:-0.5": "b5",
  "-1.5:-0.5": "c5",
  "-0.5:-0.5": "d5",
  "0.5:-0.5": "e5",
  "1.5:-0.5": "f5",
  "2.5:-0.5": "g5",
  "3.5:-0.5": "h5",
  "-3.5:0.5": "a4",
  "-2.5:0.5": "b4",
  "-1.5:0.5": "c4",
  "-0.5:0.5": "d4",
  "0.5:0.5": "e4",
  "1.5:0.5": "f4",
  "2.5:0.5": "g4",
  "3.5:0.5": "h4",
  "-3.5:1.5": "a3",
  "-2.5:1.5": "b3",
  "-1.5:1.5": "c3",
  "-0.5:1.5": "d3",
  "0.5:1.5": "e3",
  "1.5:1.5": "f3",
  "2.5:1.5": "g3",
  "3.5:1.5": "h3",
  "-3.5:2.5": "a2",
  "-2.5:2.5": "b2",
  "-1.5:2.5": "c2",
  "-0.5:2.5": "d2",
  "0.5:2.5": "e2",
  "1.5:2.5": "f2",
  "2.5:2.5": "g2",
  "3.5:2.5": "h2",
  "-3.5:3.5": "a1",
  "-2.5:3.5": "b1",
  "-1.5:3.5": "c1",
  "-0.5:3.5": "d1",
  "0.5:3.5": "e1",
  "1.5:3.5": "f1",
  "2.5:3.5": "g1",
  "3.5:3.5": "h1",
}

const board = {
    "a1": "w-rook",
    "b1": "w-knight",
    "c1": "w-bishop",
    "d1": "w-queen",
    "e1": "w-king",
    "f1": "w-bishop",
    "g1":"w-knight",
    "h1": "w-rook",
    "a2": "w-pawn",
    "b2": "w-pawn",
    "c2": "w-pawn",
    "d2": "w-pawn",
    "e2": "w-pawn",
    "f2": "w-pawn",
    "g2":"w-pawn",
    "h2": "w-pawn",
    "a8": "b-rook",
    "b8": "b-knight",
    "c8": "b-bishop",
    "d8": "b-queen",
    "e8": "b-king",
    "f8": "b-bishop",
    "g8":"b-knight",
    "h8": "b-rook",
    "a7": "b-pawn",
    "b7": "b-pawn",
    "c7": "b-pawn",
    "d7": "b-pawn",
    "e7": "b-pawn",
    "f7": "b-pawn",
    "g7":"b-pawn",
    "h7": "b-pawn",
    "a6": "",
    "b6": "",
    "c6": "",
    "d6": "",
    "e6": "",
    "f6": "",
    "g6":"",
    "h6": "",
    "a5": "",
    "b5": "",
    "c5": "",
    "d5": "",
    "e5": "",
    "f5": "",
    "g5":"",
    "h5": "",
    "a4": "",
    "b4": "",
    "c4": "",
    "d4": "",
    "e4": "",
    "f4": "",
    "g4":"",
    "h4": "",
    "a3": "",
    "b3": "",
    "c3": "",
    "d3": "",
    "e3": "",
    "f3": "",
    "g3":"",
    "h3": "",
}

var meshBoard;
var originalMeshBoard;
var movesHistoric;

const renderer = new THREE.WebGLRenderer();

renderer.shadowMap.enabled = true;

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(
    15,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const orbit = new OrbitControls(camera, renderer.domElement);

// const axesHelper = new THREE.AxesHelper(5);

// scene.add(axesHelper);

camera.position.set(0, 35, 10);
orbit.update();

const planeMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(8, 8, 2, 2),
    new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        visible: false
    })
);

planeMesh.rotateX(-Math.PI / 2);
scene.add(planeMesh);
planeMesh.name = 'ground';

const grid = new THREE.GridHelper(8, 8);
scene.add(grid);

const highlightMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide
    })
);

highlightMesh.rotateX(-Math.PI / 2);
highlightMesh.position.set(0.5, 0, 0.5);
scene.add(highlightMesh);

const mousePosition = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
let intersects;
let selectedPiece = null;
let chess = new Chess();
let turn = 'w';


window.addEventListener('load',(e) => {
    const assetsLoader = new GLTFLoader();

    assetsLoader.load(pieces_obj["board"].href, function(gtlf) {
        const model = gtlf.scene;
        scene.add(model);
        model.position.set(0,-0.05,0);
    }, undefined, function(error) {
        console.log(error);
    });

    meshBoard = {};
    originalMeshBoard = {};
    movesHistoric = [];
    let id = 0;

    for (const pos_piece in board) {
        if (board[pos_piece].length == 0) {
            meshBoard[pos_piece] = "";
            continue;
        }

        // changer en promise pour éviter d'avoir à unsubscribe
        setTimeout(()=>{
            let color = (board[pos_piece].split("-")[0] == "w") ? "white" : "black";
            let piece_name = board[pos_piece].split("-")[1];
            let coords_unparsed = Object.keys(dictionnary).find(key => dictionnary[key] === pos_piece);
            let coords = {
                x: coords_unparsed.split(':')[0],
                z: coords_unparsed.split(':')[1]
            }
            
            let name = color.charAt(0)+'-'+piece_name;
            meshBoard[pos_piece] = name + '_' + pos_piece;
            // console.log(id)
            movesHistoric.push({
                id:id,
                piece_name: meshBoard[pos_piece],
                coords: [coords]
            })
        
            assetsLoader.load(pieces_obj[name].href, function(gtlf) {
                const model = gtlf.scene;
                // console.log(model)
                model.name = name;
                model.children[0].name = name + '_' + pos_piece;
                scene.add(model);
                // console.log(model.position)
                if (piece_name == "knight") {
                    model.rotateY(Math.PI / 2 ) 
                }
                // model.matrixAutoUpdate = false;
                model.position.set(coords.x,0,coords.z);
            }, undefined, function(error) {
                console.log(error);
            })
            id++
        },0)
    }
    // console.log(meshBoard)
    originalMeshBoard = meshBoard
});

window.addEventListener('mousemove',(e) => {
    mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
    mousePosition.y = -(e.clientY / window.innerHeight) * 2 + 1;
    // console.log(mousePosition.x,'  mouse  ', mousePosition.y)
    raycaster.setFromCamera(mousePosition, camera);
    intersects = raycaster.intersectObjects(scene.children);
    for (let index = 0; index < intersects.length; index++) {
        const element = intersects[index];
        // console.log(element)
        if (element.object.name === 'ground') {
            const highlightPos = new THREE.Vector3().copy(element.point).floor().addScalar(0.5)
            highlightMesh.position.set(highlightPos.x, 0, highlightPos.z);
        }
    }

});

window.addEventListener('mousedown',(e) => {
        // Convert mouse coordinates
        mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
        mousePosition.y = -(e.clientY / window.innerHeight) * 2 + 1;

        // Update the raycaster with the camera and mouse position
        raycaster.setFromCamera(mousePosition, camera);
    
        // Check for intersections with pieces or the board
        intersects = raycaster.intersectObjects(scene.children, true);
    
        if (intersects.length > 0) {
            // const firstObject = intersects[0].object;
            // console.log('log object ',i,' ',intersects[i].object)
            // Handle the first click to select a piece
            let xCoords;
            let zCoords;
            let coordsToSearch;
            let isCoordsFound = false;
            let moves;
            for (let index = 0; index < intersects.length; index++) {
                const element = intersects[index];
                // console.log(index, element.object);
                let coords = element.object.position.x+':'+element.object.position.z;
                console.log('coords : ',coords)
                console.log(dictionnary[coords])
                console.log(meshBoard[dictionnary[coords]])
                if (dictionnary[coords] != undefined) {
                    xCoords = element.object.position.x
                    zCoords = element.object.position.z
                    isCoordsFound = true
                }
            }

            if (!selectedPiece) {
                // first click -> highlight possible square
                // selectedPiece = firstObject;
                if (isCoordsFound) {                    
                    coordsToSearch = xCoords+':'+zCoords;
                    let squareName = dictionnary[coordsToSearch];
                    // console.log('here')
                    selectedPiece = scene.getObjectByName(meshBoard[squareName]); 
                    console.log('selected piece : ',selectedPiece);
                    if (selectedPiece != null && selectedPiece.type != 'Scene') {
                        console.log(chess.moves({square: squareName}));
                        moves = chess.moves({square: squareName})
                        if (selectedPiece.type == 'Group') {
                            for (let index = 0; index < selectedPiece.children.length; index++) {
                                const element = selectedPiece.children[index];
                                highlightPiece(element);  
                            }
                        } else {
                            highlightPiece(selectedPiece);  // Optional: highlight selected piece
                        }
                    }
                    return;
                }
            }

            if (selectedPiece) {
                for (let index = 0; index < intersects.length; index++) {
                    const element = intersects[index];
                    let squareCoords = new THREE.Vector3().copy(element.point).floor().addScalar(0.5)
                    if(isChessBoardSquare(element.object)) {
                        // console.log('in')
                        if (selectedPiece != null && selectedPiece.type != 'Scene') {
                            try {
                                if (meshBoard[dictionnary[squareCoords.x+':'+squareCoords.z]].length > 0) {
                                    if (scene != undefined && orbit != undefined) {
                                        console.log(scene)
                                        console.log(orbit)
                                        let element = movesHistoric.filter((el)=> el.coords[el.coords.length - 1].x == squareCoords.x && el.coords[el.coords.length - 1].z == squareCoords.z)
                                        let enemyObject = this.scene.getObjectByName(element.piece_name);
                                        // orbit.detach( enemyObject.name );
                                        console.log('hellooo')
                                        console.log(enemyObject)
                                        console.log(element)
                                        scene.remove(enemyObject.name);
                                    }
                                }
                                selectedPiece.parent.position.set(squareCoords.x, 0, squareCoords.z);
                                
                            } catch (error) {
                                console.log(error.message)
                            } finally {
                                // var meshBoard;
                                // var originalMeshBoard;
                                // var movesHistoric;
                                // set moves historic on success
                                
                                // code in assets loader
                                // let color = (board[pos_piece].split("-")[0] == "w") ? "white" : "black";
                                // let piece_name = board[pos_piece].split("-")[1];
                                // let coords_unparsed = Object.keys(dictionnary).find(key => dictionnary[key] === pos_piece);
                                // let coords = {
                                //     x: coords_unparsed.split(':')[0],
                                //     z: coords_unparsed.split(':')[1]
                                // }
                                
                                // let name = color.charAt(0)+'-'+piece_name;
                                // meshBoard[pos_piece] = name + '_' + pos_piece;
                                // console.log(name)
                                // movesHistoric.push({
                                //     piece_name: meshBoard[pos_piece],
                                //     coords: [coords]
                                // })
                                console.log(selectedPiece)
                                console.log(xCoords+':'+zCoords)
                                let selectedPieceName = selectedPiece.name
                                // let new_piece_name = meshBoard[dictionnary[xCoords+':'+zCoords]].split('_')[0] + '_' +dictionnary[squareCoords.x+':'+squareCoords.z];
                                // const isPiece = (element) => element.piece_name == meshBoard[dictionnary[xCoords+':'+zCoords]];
                                // let idx = movesHistoric.findIndex(isPiece);
                                let idx = movesHistoric.filter((el)=>selectedPieceName == el.piece_name)
                                // debugger;
                                // console.log(new_piece_name)
                                console.log('before')
                                console.log(idx);
                                console.log(dictionnary)
                                console.log(meshBoard)
                                console.log(movesHistoric)
                                if (idx.length > 0) {
                                    movesHistoric[idx[0].id].coords.push({x:xCoords,z:zCoords})
                                    let previousId = movesHistoric[idx[0].id].coords.length - 2
                                    let previousCoord = movesHistoric[idx[0].id].coords[previousId]
                                    let nextId = movesHistoric[idx[0].id].coords.length - 1
                                    let nextCoord = movesHistoric[idx[0].id].coords[nextId]
                                    meshBoard[dictionnary[previousCoord.x+':'+previousCoord.z]] = ''
                                    meshBoard[dictionnary[nextCoord.x+':'+nextCoord.z]] = movesHistoric[idx[0].id].piece_name
                                    chess.moves()
                                    if (dictionnary[previousCoord.x+':'+previousCoord.z] != dictionnary[nextCoord.x+':'+nextCoord.z]) {
                                        chess.move(dictionnary[previousCoord.x+':'+previousCoord.z]+dictionnary[nextCoord.x+':'+nextCoord.z])
                                    }
                                    console.log('-----')
                                }
                                console.log('after')
                                console.log(meshBoard)
                                console.log(movesHistoric)
                            }

                            if (selectedPiece.type == 'Group') {
                                for (let index = 0; index < selectedPiece.children.length; index++) {
                                    const element = selectedPiece.children[index];
                                    unHighlightPiece(element);    
                                }
                            } else {
                                unHighlightPiece(selectedPiece);  // Optional: highlight selected piece
                            }
                            moves = []
                        }
                        selectedPiece = null;  // Deselect the piece after moving
                        return;
                    }
                }
            }
        }

});

function isChessBoardSquare(object) {
    return object.name == "ground";  // Assuming board squares have names like 'chessSquare_'
}

function highlightPiece(piece) {
    // Example: Change the material or add some outline effect
    piece.material.emissive.setHex(0xff0000);  // Highlight red
}

function unHighlightPiece(piece) {
    // Example: Change the material by removing some outline effect
    piece.material.emissive.setHex(0x000000);  // Highlight no color
}

// camera.position.z = 5;
// camera.position.y = 1;

// const boxGeometry = new THREE.BoxGeometry();
// const boxMaterial = new THREE.MeshStandardMaterial({
//     color: 0x00FF00
// });
// const box = new THREE.Mesh(boxGeometry, boxMaterial);
// scene.add(box);

// const planeGeometry = new THREE.PlaneGeometry(30, 30);
// const planeMaterial = new THREE.MeshStandardMaterial({
//     color:0xFFFFFF,
//     side: THREE.DoubleSide
// });
// const plane = new THREE.Mesh(planeGeometry, planeMaterial);
// scene.add(plane);
// plane.rotation.x = -0.5 * Math.PI;
// plane.receiveShadow = true

// const gridHelper = new THREE.GridHelper(30);
// scene.add(gridHelper);

// // box.rotation.x = 5;
// // box.rotation.y = 5;

// const sphereGeometry = new THREE.SphereGeometry(4, 50, 50);
// // MeshBasicMaterial -> not affected by light
// // MeshStandardMaterial
// // MeshLambertMaterial
// const sphereMaterial = new THREE.MeshStandardMaterial({
//     color: 0x0000ff,
//     wireframe: false
// });
// const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
// scene.add(sphere);
// sphere.castShadow = true;

// // sphere.position.x = -10;
// sphere.position.set(-10, 10, 0);

// // ambient light
const ambientLight = new THREE.AmbientLight(0xFFFFFF);
scene.add(ambientLight);

//directional light
const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
scene.add(directionalLight);
directionalLight.position.set(-30, 50, 0);
directionalLight.castShadow = true;
directionalLight.shadow.camera.bottom = -12;

// const dLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
// scene.add(dLightHelper);

// // const dLightShadowHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
// // scene.add(dLightShadowHelper);

// // spot light
// const spotLight = new THREE.SpotLight(0xFFFFFF);
// scene.add(spotLight);
// spotLight.position.set(-100, 100, 0);
// spotLight.castShadow = true;
// spotLight.angle = 0.2;

// const sLightHelper = new SpotLightHelper(spotLight);
// scene.add(sLightHelper);

// //scene.fog = new THREE.Fog(0xFFFFFF, 0, 200);
// scene.fog = new THREE.FogExp2(0xFFFFFF, 0.01);

// // renderer.setClearColor(0xFFEA00);

// // texture loader
// const textureLoader = new THREE.TextureLoader();
// // basic loader
// // let starsTx = textureLoader.load(stars);
// // let nebulaTx = textureLoader.load(stars);
// // cube loader

// // const newscene = new THREE.Scene();
// const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = new THREE.Color(0x4F3B56);

//Hexadecimal color (recommended)
// const color2 = new THREE.Color( 0xff0000 );
// // .setPath('../img/')
// // .load([
// //     'nebula.jpg',
// //     'nebula.jpg',
// //     'stars.jpg',
// //     'stars.jpg',
// //     'stars.jpg',
// //     'stars.jpg'
// // ]);
// // console.log(typeof nebula);
// // console.log(typeof stars);
// scene.background = cubeTextureLoader.load([
//     stars,
//     stars,
//     stars,
//     stars,
//     stars,
//     stars
// ]);

// const box2Geometry = new THREE.BoxGeometry(4,4,4);
// const box2Material = new THREE.MeshBasicMaterial({
//     // color: 0x00FF00,
//     // map: textureLoader.load(nebula)
// });
// const box2MultipleMaterial = [
//     new THREE.MeshBasicMaterial({
//         map: textureLoader.load(stars)
//     }),    
//     new THREE.MeshBasicMaterial({
//         map: textureLoader.load(stars)
//     }),    
//     new THREE.MeshBasicMaterial({
//         map: textureLoader.load(nebula)
//     }),    
//     new THREE.MeshBasicMaterial({
//         map: textureLoader.load(nebula)
//     }),    
//     new THREE.MeshBasicMaterial({
//         map: textureLoader.load(stars)
//     }),    
//     new THREE.MeshBasicMaterial({
//         map: textureLoader.load(stars)
//     })
// ]
// const box2 = new THREE.Mesh(box2Geometry, box2MultipleMaterial);
// scene.add(box2);
// // box2.material.map = textureLoader.load(nebula);
// box2.position.set(0,15,10);

// const plane2Geometry = new THREE.PlaneGeometry(10, 10, 10, 10);
// const plane2Material = new THREE.MeshBasicMaterial({
//     color: 0xFFFFFF,
//     wireframe: true
// });

// const plane2 = new THREE.Mesh(plane2Geometry, plane2Material);
// scene.add(plane2);
// plane2.position.set(10, 10, 15);

// plane2.geometry.attributes.position.array[0] -= 10 * Math.random();
// plane2.geometry.attributes.position.array[1] -= 10 * Math.random();
// plane2.geometry.attributes.position.array[2] -= 10 * Math.random();
// const lastPointZ = plane2.geometry.attributes.position.array.length - 1;
// plane2.geometry.attributes.position.array[lastPointZ] -= 10 * Math.random();

// const vShader = `
    // void main() {
    //     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    // }
// `;

// const fShader = `
    // void main() {
    //     gl_FragColor = vec4(0.5, 0.5, 1.0, 1.0);
    // }
// `;

// const sphere2Geometry = new THREE.SphereGeometry(4);
// const sphere2Material = new THREE.ShaderMaterial({
//     vertexShader: vShader,
//     fragmentShader: fShader
// });
// const sphere2Material = new THREE.ShaderMaterial({
//     vertexShader: document.getElementById('vertexShader').textContent,
//     fragmentShader: document.getElementById('fragmentShader').textContent
// });
// const sphere2 = new THREE.Mesh(sphere2Geometry, sphere2Material);
// scene.add(sphere2);
// sphere2.position.set(-5, 10, 10);

// const assetsLoader = new GLTFLoader();

// assetsLoader.load(monkeyUrl.href, function(gtlf) {
//     const model = gtlf.scene;
//     scene.add(model);
//     model.position.set(10,20, 10);
// }, undefined, function(error) {
//     console.log(error);
// })

// const gui = new dat.GUI();

// const options = {
//     sphereColor: '#ffea00',
//     wireframe: false,
//     speed: 0.01,
//     angle: 0.2,
//     penumbra: 0,
//     intensity: 1
// };

// gui.addColor(options, 'sphereColor').onChange(function(e){
//     sphere.material.color.set(e);
// });

// gui.add(options, 'wireframe').onChange(function(e){
//     sphere.material.wireframe = e;
// });

// gui.add(options, 'speed', 0, 0.1);

// gui.add(options, 'angle', 0, 1);
// gui.add(options, 'penumbra', 0, 100000);
// gui.add(options, 'intensity', 0, 100000);


// let step = 0;
// let speed = 0.01;

// const mousePosition = new THREE.Vector2();
// window.addEventListener('mousemove', function(e){
//     mousePosition.x = (e.clientX / this.window.innerWidth) * 2 - 1;
//     mousePosition.y = - (e.clientY / this.window.innerWidth) * 2 + 1;
// })

// const rayCaster = new THREE.Raycaster();

// const sphereId = sphere.id;
// box2.name = 'theBox';



function animate(time) {
    // box.rotation.x = time / 1000;
    // box.rotation.y = time / 1000;

    // step += options.speed;
    // sphere.position.y = 10 * Math.abs(Math.sin(step))

    // spotLight.angle = options.angle;
    // spotLight.penumbra = options.penumbra;
    // spotLight.intensity = options.intensity;
    // sLightHelper.update();

    // rayCaster.setFromCamera(mousePosition, camera);
    // const intersects = rayCaster.intersectObjects(scene.children);
    // // console.log(intersects)

    // for (let i = 0; i < intersects.length; i++) {
    //     let element = intersects[i];
    //     if (element.object.id === sphereId) {
    //         element.object.material.color.set(0xFF0000);
    //     }

    //     if (element.object.name == 'theBox') {
    //         element.object.rotation.x = time / 1000;
    //         element.object.rotation.y = time / 1000;
    //     }
    // }

    // plane2.geometry.attributes.position.array[0] -= 10 * Math.random();
    // plane2.geometry.attributes.position.array[1] -= 10 * Math.random();
    // plane2.geometry.attributes.position.array[2] -= 10 * Math.random();
    // const lastPointZ = plane2.geometry.attributes.position.array.length - 1;
    // plane2.geometry.attributes.position.array[lastPointZ] -= 10 * Math.random();
    // plane2.geometry.attributes.position.needsUpdate = true;
    // renderer.render(scene, camera);
    // requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

// this code permit to update and resize de screen and his content of the camera
window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})