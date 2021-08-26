using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CursorChangeScript : MonoBehaviour
{
    public Texture2D handTextureMouse;
    public CursorMode curModeMouse = CursorMode.Auto;
    public Vector2 hotSpot = Vector2.zero;


    void Start()
    {
        Cursor.SetCursor(null, hotSpot, curModeMouse);
    }

    public void OnMouseEnter()
    {
        {
            Cursor.SetCursor(handTextureMouse, hotSpot, curModeMouse);
        }
    }

    public void OnMouseExit()
    {
        Cursor.SetCursor(null, hotSpot, curModeMouse);
    }


}
